import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneControlPointDuplicateElement
 * @class IconTwotoneControlPointDuplicateElement
 * @extends {AoflElement}
 */
class IconTwotoneControlPointDuplicateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneControlPointDuplicateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-control-point-duplicate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneControlPointDuplicateElement.is, IconTwotoneControlPointDuplicateElement);

export default IconTwotoneControlPointDuplicateElement;
