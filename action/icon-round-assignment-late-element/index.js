import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssignmentLateElement
 * @class IconRoundAssignmentLateElement
 * @extends {AoflElement}
 */
class IconRoundAssignmentLateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssignmentLateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assignment-late';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssignmentLateElement.is, IconRoundAssignmentLateElement);

export default IconRoundAssignmentLateElement;
