import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWatchElement
 * @class IconBaselineWatchElement
 * @extends {AoflElement}
 */
class IconBaselineWatchElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWatchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-watch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWatchElement.is, IconBaselineWatchElement);

export default IconBaselineWatchElement;
