import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeveloperBoardElement
 * @class IconRoundDeveloperBoardElement
 * @extends {AoflElement}
 */
class IconRoundDeveloperBoardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeveloperBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-developer-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeveloperBoardElement.is, IconRoundDeveloperBoardElement);

export default IconRoundDeveloperBoardElement;
