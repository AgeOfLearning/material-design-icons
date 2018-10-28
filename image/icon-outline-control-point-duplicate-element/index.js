import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineControlPointDuplicateElement
 * @class IconOutlineControlPointDuplicateElement
 * @extends {AoflElement}
 */
class IconOutlineControlPointDuplicateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineControlPointDuplicateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-control-point-duplicate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineControlPointDuplicateElement.is, IconOutlineControlPointDuplicateElement);

export default IconOutlineControlPointDuplicateElement;
