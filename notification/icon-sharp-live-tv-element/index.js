import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLiveTvElement
 * @class IconSharpLiveTvElement
 * @extends {AoflElement}
 */
class IconSharpLiveTvElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLiveTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-live-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLiveTvElement.is, IconSharpLiveTvElement);

export default IconSharpLiveTvElement;
