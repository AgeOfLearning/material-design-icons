import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWbIridescentElement
 * @class IconOutlineWbIridescentElement
 * @extends {AoflElement}
 */
class IconOutlineWbIridescentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWbIridescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-wb-iridescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWbIridescentElement.is, IconOutlineWbIridescentElement);

export default IconOutlineWbIridescentElement;
