import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeveloperBoardElement
 * @class IconTwotoneDeveloperBoardElement
 * @extends {AoflElement}
 */
class IconTwotoneDeveloperBoardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeveloperBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-developer-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeveloperBoardElement.is, IconTwotoneDeveloperBoardElement);

export default IconTwotoneDeveloperBoardElement;
