import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssignmentIndElement
 * @class IconSharpAssignmentIndElement
 * @extends {AoflElement}
 */
class IconSharpAssignmentIndElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssignmentIndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assignment-ind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssignmentIndElement.is, IconSharpAssignmentIndElement);

export default IconSharpAssignmentIndElement;
