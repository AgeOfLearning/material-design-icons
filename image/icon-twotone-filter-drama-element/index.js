import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterDramaElement
 * @class IconTwotoneFilterDramaElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterDramaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterDramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-drama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterDramaElement.is, IconTwotoneFilterDramaElement);

export default IconTwotoneFilterDramaElement;
