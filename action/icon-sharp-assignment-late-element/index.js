import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssignmentLateElement
 * @class IconSharpAssignmentLateElement
 * @extends {AoflElement}
 */
class IconSharpAssignmentLateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssignmentLateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assignment-late';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssignmentLateElement.is, IconSharpAssignmentLateElement);

export default IconSharpAssignmentLateElement;
