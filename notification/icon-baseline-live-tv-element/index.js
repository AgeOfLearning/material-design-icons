import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLiveTvElement
 * @class IconBaselineLiveTvElement
 * @extends {AoflElement}
 */
class IconBaselineLiveTvElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLiveTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-live-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLiveTvElement.is, IconBaselineLiveTvElement);

export default IconBaselineLiveTvElement;
