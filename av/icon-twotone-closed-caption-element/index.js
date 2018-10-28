import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneClosedCaptionElement
 * @class IconTwotoneClosedCaptionElement
 * @extends {AoflElement}
 */
class IconTwotoneClosedCaptionElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneClosedCaptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-closed-caption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneClosedCaptionElement.is, IconTwotoneClosedCaptionElement);

export default IconTwotoneClosedCaptionElement;
