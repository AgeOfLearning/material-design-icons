import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssignmentReturnElement
 * @class IconRoundAssignmentReturnElement
 * @extends {AoflElement}
 */
class IconRoundAssignmentReturnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssignmentReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assignment-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssignmentReturnElement.is, IconRoundAssignmentReturnElement);

export default IconRoundAssignmentReturnElement;
