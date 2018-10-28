import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlayForWorkElement
 * @class IconTwotonePlayForWorkElement
 * @extends {AoflElement}
 */
class IconTwotonePlayForWorkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlayForWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-play-for-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlayForWorkElement.is, IconTwotonePlayForWorkElement);

export default IconTwotonePlayForWorkElement;
