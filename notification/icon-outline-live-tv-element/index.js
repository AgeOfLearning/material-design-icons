import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLiveTvElement
 * @class IconOutlineLiveTvElement
 * @extends {AoflElement}
 */
class IconOutlineLiveTvElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLiveTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-live-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLiveTvElement.is, IconOutlineLiveTvElement);

export default IconOutlineLiveTvElement;
