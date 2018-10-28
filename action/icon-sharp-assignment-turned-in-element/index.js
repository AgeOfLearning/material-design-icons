import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssignmentTurnedInElement
 * @class IconSharpAssignmentTurnedInElement
 * @extends {AoflElement}
 */
class IconSharpAssignmentTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssignmentTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assignment-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssignmentTurnedInElement.is, IconSharpAssignmentTurnedInElement);

export default IconSharpAssignmentTurnedInElement;
