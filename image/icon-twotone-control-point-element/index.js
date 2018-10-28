import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneControlPointElement
 * @class IconTwotoneControlPointElement
 * @extends {AoflElement}
 */
class IconTwotoneControlPointElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneControlPointElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-control-point';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneControlPointElement.is, IconTwotoneControlPointElement);

export default IconTwotoneControlPointElement;
