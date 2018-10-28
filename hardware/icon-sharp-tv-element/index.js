import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTvElement
 * @class IconSharpTvElement
 * @extends {AoflElement}
 */
class IconSharpTvElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTvElement.is, IconSharpTvElement);

export default IconSharpTvElement;
