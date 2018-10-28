import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterDramaElement
 * @class IconRoundFilterDramaElement
 * @extends {AoflElement}
 */
class IconRoundFilterDramaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterDramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-drama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterDramaElement.is, IconRoundFilterDramaElement);

export default IconRoundFilterDramaElement;
