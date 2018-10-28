import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallMadeElement
 * @class IconTwotoneCallMadeElement
 * @extends {AoflElement}
 */
class IconTwotoneCallMadeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallMadeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-made';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallMadeElement.is, IconTwotoneCallMadeElement);

export default IconTwotoneCallMadeElement;
