import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssignmentIndElement
 * @class IconRoundAssignmentIndElement
 * @extends {AoflElement}
 */
class IconRoundAssignmentIndElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssignmentIndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assignment-ind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssignmentIndElement.is, IconRoundAssignmentIndElement);

export default IconRoundAssignmentIndElement;
