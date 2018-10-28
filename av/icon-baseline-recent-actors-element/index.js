import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRecentActorsElement
 * @class IconBaselineRecentActorsElement
 * @extends {AoflElement}
 */
class IconBaselineRecentActorsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRecentActorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-recent-actors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRecentActorsElement.is, IconBaselineRecentActorsElement);

export default IconBaselineRecentActorsElement;
