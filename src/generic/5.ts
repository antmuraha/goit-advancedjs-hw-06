/*
  You need to implement the KeyValuePair interface, which describes a key-value pair.
  Use generics so that this interface can work with any types of keys and values.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

export {};