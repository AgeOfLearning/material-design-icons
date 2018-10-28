import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeveloperBoardElement
 * @class IconOutlineDeveloperBoardElement
 * @extends {AoflElement}
 */
class IconOutlineDeveloperBoardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeveloperBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-developer-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeveloperBoardElement.is, IconOutlineDeveloperBoardElement);

export default IconOutlineDeveloperBoardElement;
