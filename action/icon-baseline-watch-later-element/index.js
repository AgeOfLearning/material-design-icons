import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWatchLaterElement
 * @class IconBaselineWatchLaterElement
 * @extends {AoflElement}
 */
class IconBaselineWatchLaterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWatchLaterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-watch-later';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWatchLaterElement.is, IconBaselineWatchLaterElement);

export default IconBaselineWatchLaterElement;
