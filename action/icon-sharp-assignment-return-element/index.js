import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssignmentReturnElement
 * @class IconSharpAssignmentReturnElement
 * @extends {AoflElement}
 */
class IconSharpAssignmentReturnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssignmentReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assignment-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssignmentReturnElement.is, IconSharpAssignmentReturnElement);

export default IconSharpAssignmentReturnElement;
