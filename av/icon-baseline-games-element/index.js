import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGamesElement
 * @class IconBaselineGamesElement
 * @extends {AoflElement}
 */
class IconBaselineGamesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGamesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-games';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGamesElement.is, IconBaselineGamesElement);

export default IconBaselineGamesElement;
