use super::virt::Node;
use crate::base::ast::ExprSource;
use crate::base::ast::Location;
use serde::Serialize;

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct InsertChild {
  pub child: Node,
  pub index: usize,
}

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct DeleteChild {
  pub index: usize,
}

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct SourceChanged {
  #[serde(rename = "propertyName")]
  pub property_name: String,

  #[serde(rename = "newLocation")]
  pub new_source: ExprSource,
}

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct SetAttribute {
  pub name: String,
  pub value: Option<String>,
}

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct RemoveAttribute {
  pub name: String,
}

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct SetText {
  pub value: String,
}

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct ReplaceNode {
  pub replacement: Node,
}

#[derive(Debug, PartialEq, Serialize, Clone)]
#[serde(tag = "kind")]
pub enum Action {
  ReplaceNode(ReplaceNode),
  InsertChild(InsertChild),
  DeleteChild(DeleteChild),
  SetAttribute(SetAttribute),
  SourceChanged(SourceChanged),
  SetText(SetText),
  RemoveAttribute(RemoveAttribute),
}

#[derive(Debug, PartialEq, Serialize, Clone)]
pub struct Mutation {
  #[serde(rename = "nodePath")]
  node_path: Vec<usize>,
  action: Action,
}

impl Mutation {
  pub fn new(node_path: Vec<usize>, action: Action) -> Mutation {
    Mutation { node_path, action }
  }
}
