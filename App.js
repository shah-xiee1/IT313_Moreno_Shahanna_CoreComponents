
import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';

// STUDENT DATA
const initialStudents = [
  {
    id: 's1',
    name: 'Ana Cruz',
    year: '3rd Year',
    photoUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces',
    flagged: false,
  },
  {
    id: 's2',
    name: 'Bea Santos',
    year: '2nd Year',
    photoUrl:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=faces',
    flagged: false,
  },
  {
    id: 's3',
    name: 'Cid Ramos',
    year: '4th Year',
    photoUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces',
    flagged: false,
  },
  {
    id: 's4',
    name: 'Dex Alonzo',
    year: '1st Year',
    photoUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces',
    flagged: false,
  },
  {
    id: 's5',
    name: 'Eli Tan',
    year: '3rd Year',
    photoUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces',
    flagged: false,
  },
];

// STUDENT CARD COMPONENT
function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photoUrl }}
        style={styles.studentImage}
      />

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>
          {name}
        </Text>

        <Text style={styles.studentYear}>
          {year}
        </Text>

        <Text style={styles.studentId}>
          Student ID: {id.toUpperCase()}
        </Text>
      </View>

      <Pressable
        onPress={onToggleFlag}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flaggedButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text
          style={[
            styles.flagText,
            flagged && styles.flaggedText,
          ]}
        >
          {flagged ? '✓ Flagged' : '+ Flag'}
        </Text>
      </Pressable>
    </View>
  );
}

// MAIN STUDENT DIRECTORY COMPONENT
export default function StudentDirectory() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState('');

  // SEARCH FILTER
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  // TOGGLE FLAG STATUS
  const toggleFlag = (id) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  // COUNT FLAGGED STUDENTS
  const flaggedCount = students.filter(
    (student) => student.flagged
  ).length;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F7F2"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSubtitle}>
            IT313 • STUDENT SERVICES
          </Text>

          <Text style={styles.headerTitle}>
            Student Directory
          </Text>

          <Text style={styles.headerDescription}>
            Manage and monitor students for academic advising.
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>S</Text>
        </View>
      </View>

      {/* SUMMARY */}
      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>
            TOTAL STUDENTS
          </Text>

          <Text style={styles.summaryNumber}>
            {students.length.toString().padStart(2, '0')}
          </Text>
        </View>

        <View style={styles.summaryDivider} />

        <View>
          <Text style={styles.summaryLabel}>
            FLAGGED
          </Text>

          <Text style={styles.summaryNumber}>
            {flaggedCount.toString().padStart(2, '0')}
          </Text>
        </View>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>⌕</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search student name..."
          placeholderTextColor="#999E96"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>

      {/* SECTION TITLE */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>
            Student List
          </Text>

          <Text style={styles.sectionSubtitle}>
            {filteredStudents.length} students found
          </Text>
        </View>

        <Text style={styles.sectionTag}>
          ACADEMIC ADVISING
        </Text>
      </View>

      {/* SCROLLABLE STUDENT LIST */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={student.flagged}
              onToggleFlag={() => toggleFlag(student.id)}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>⌕</Text>

            <Text style={styles.emptyTitle}>
              No students found
            </Text>

            <Text style={styles.emptyDescription}>
              Try searching using another student name.
            </Text>
          </View>
        )}

        <Text style={styles.footer}>
          IT313 STUDENT DIRECTORY • 2026
        </Text>
      </ScrollView>
    </View>
  );
}

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F2',
    paddingTop: 55,
    paddingHorizontal: 22,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  headerSubtitle: {
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: '700',
    color: '#738273',
    marginBottom: 8,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#243C32',
  },

  headerDescription: {
    fontSize: 12,
    color: '#858B83',
    marginTop: 6,
  },

  headerIcon: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: '#294B3A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },

  summaryCard: {
    backgroundColor: '#294B3A',
    borderRadius: 20,
    padding: 21,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  summaryLabel: {
    color: '#C4D1C5',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  summaryNumber: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 5,
  },

  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#698071',
    marginHorizontal: 45,
  },

  searchContainer: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E8EAE2',
    marginBottom: 23,
  },

  searchIcon: {
    fontSize: 25,
    color: '#667B6A',
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#263D32',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#263D32',
  },

  sectionSubtitle: {
    fontSize: 11,
    color: '#92978E',
    marginTop: 4,
  },

  sectionTag: {
    fontSize: 8,
    fontWeight: '800',
    color: '#667D6A',
    backgroundColor: '#E5EDE3',
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 8,
  },

  listContainer: {
    paddingBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 13,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECEDE7',
  },

  studentImage: {
    width: 62,
    height: 62,
    borderRadius: 16,
    backgroundColor: '#E5E8E0',
  },

  studentInfo: {
    flex: 1,
    marginLeft: 12,
  },

  studentName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#293E33',
  },

  studentYear: {
    fontSize: 12,
    color: '#778477',
    marginTop: 4,
  },

  studentId: {
    fontSize: 9,
    color: '#A0A69D',
    marginTop: 5,
  },

  flagButton: {
    backgroundColor: '#E9F0E8',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 10,
  },

  flaggedButton: {
    backgroundColor: '#294B3A',
  },

  pressedButton: {
    opacity: 0.65,
    transform: [{ scale: 0.95 }],
  },

  flagText: {
    color: '#45664D',
    fontSize: 10,
    fontWeight: '800',
  },

  flaggedText: {
    color: '#FFFFFF',
  },

  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 55,
  },

  emptyIcon: {
    fontSize: 45,
    color: '#9BAA9C',
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#294B3A',
    marginTop: 12,
  },

  emptyDescription: {
    fontSize: 12,
    color: '#92978E',
    marginTop: 6,
    textAlign: 'center',
  },

  footer: {
    textAlign: 'center',
    color: '#A1A69D',
    fontSize: 9,
    letterSpacing: 1.5,
    marginTop: 15,
    marginBottom: 15,
  },
});
