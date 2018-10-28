import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlayArrowElement
 * @class IconTwotonePlayArrowElement
 * @extends {AoflElement}
 */
class IconTwotonePlayArrowElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlayArrowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-play-arrow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlayArrowElement.is, IconTwotonePlayArrowElement);

export default IconTwotonePlayArrowElement;
