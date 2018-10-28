import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermMediaElement
 * @class IconTwotonePermMediaElement
 * @extends {AoflElement}
 */
class IconTwotonePermMediaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermMediaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-media';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermMediaElement.is, IconTwotonePermMediaElement);

export default IconTwotonePermMediaElement;
