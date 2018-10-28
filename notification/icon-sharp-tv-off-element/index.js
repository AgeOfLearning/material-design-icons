import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTvOffElement
 * @class IconSharpTvOffElement
 * @extends {AoflElement}
 */
class IconSharpTvOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTvOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tv-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTvOffElement.is, IconSharpTvOffElement);

export default IconSharpTvOffElement;
