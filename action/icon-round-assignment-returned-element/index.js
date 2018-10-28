import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssignmentReturnedElement
 * @class IconRoundAssignmentReturnedElement
 * @extends {AoflElement}
 */
class IconRoundAssignmentReturnedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssignmentReturnedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assignment-returned';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssignmentReturnedElement.is, IconRoundAssignmentReturnedElement);

export default IconRoundAssignmentReturnedElement;
