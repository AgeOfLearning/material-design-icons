import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWorkElement
 * @class IconTwotoneWorkElement
 * @extends {AoflElement}
 */
class IconTwotoneWorkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWorkElement.is, IconTwotoneWorkElement);

export default IconTwotoneWorkElement;
