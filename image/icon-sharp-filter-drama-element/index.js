import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterDramaElement
 * @class IconSharpFilterDramaElement
 * @extends {AoflElement}
 */
class IconSharpFilterDramaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterDramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-drama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterDramaElement.is, IconSharpFilterDramaElement);

export default IconSharpFilterDramaElement;
