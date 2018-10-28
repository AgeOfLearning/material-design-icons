import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssignmentTurnedInElement
 * @class IconRoundAssignmentTurnedInElement
 * @extends {AoflElement}
 */
class IconRoundAssignmentTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssignmentTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assignment-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssignmentTurnedInElement.is, IconRoundAssignmentTurnedInElement);

export default IconRoundAssignmentTurnedInElement;
