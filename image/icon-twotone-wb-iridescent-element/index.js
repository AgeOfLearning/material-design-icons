import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWbIridescentElement
 * @class IconTwotoneWbIridescentElement
 * @extends {AoflElement}
 */
class IconTwotoneWbIridescentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWbIridescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wb-iridescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWbIridescentElement.is, IconTwotoneWbIridescentElement);

export default IconTwotoneWbIridescentElement;
