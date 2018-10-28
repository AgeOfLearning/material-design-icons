import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssignmentReturnedElement
 * @class IconSharpAssignmentReturnedElement
 * @extends {AoflElement}
 */
class IconSharpAssignmentReturnedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssignmentReturnedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assignment-returned';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssignmentReturnedElement.is, IconSharpAssignmentReturnedElement);

export default IconSharpAssignmentReturnedElement;
