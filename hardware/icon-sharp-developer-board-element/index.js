import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeveloperBoardElement
 * @class IconSharpDeveloperBoardElement
 * @extends {AoflElement}
 */
class IconSharpDeveloperBoardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeveloperBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-developer-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeveloperBoardElement.is, IconSharpDeveloperBoardElement);

export default IconSharpDeveloperBoardElement;
