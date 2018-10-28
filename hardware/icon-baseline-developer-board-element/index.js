import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeveloperBoardElement
 * @class IconBaselineDeveloperBoardElement
 * @extends {AoflElement}
 */
class IconBaselineDeveloperBoardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeveloperBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-developer-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeveloperBoardElement.is, IconBaselineDeveloperBoardElement);

export default IconBaselineDeveloperBoardElement;
