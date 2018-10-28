import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaseline4KElement
 * @class IconBaseline4KElement
 * @extends {AoflElement}
 */
class IconBaseline4KElement extends AoflElement {
  /**
   * Creates an instance of IconBaseline4KElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-4k';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaseline4KElement.is, IconBaseline4KElement);

export default IconBaseline4KElement;
