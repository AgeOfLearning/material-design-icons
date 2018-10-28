import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssignmentElement
 * @class IconRoundAssignmentElement
 * @extends {AoflElement}
 */
class IconRoundAssignmentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssignmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assignment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssignmentElement.is, IconRoundAssignmentElement);

export default IconRoundAssignmentElement;
