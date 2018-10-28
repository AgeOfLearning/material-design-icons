import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterDramaElement
 * @class IconOutlineFilterDramaElement
 * @extends {AoflElement}
 */
class IconOutlineFilterDramaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterDramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-drama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterDramaElement.is, IconOutlineFilterDramaElement);

export default IconOutlineFilterDramaElement;
