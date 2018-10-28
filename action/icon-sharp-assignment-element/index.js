import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssignmentElement
 * @class IconSharpAssignmentElement
 * @extends {AoflElement}
 */
class IconSharpAssignmentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssignmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assignment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssignmentElement.is, IconSharpAssignmentElement);

export default IconSharpAssignmentElement;
