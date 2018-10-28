import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWbIridescentElement
 * @class IconSharpWbIridescentElement
 * @extends {AoflElement}
 */
class IconSharpWbIridescentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWbIridescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wb-iridescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWbIridescentElement.is, IconSharpWbIridescentElement);

export default IconSharpWbIridescentElement;
