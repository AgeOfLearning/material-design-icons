import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStayCurrentPortraitElement
 * @class IconRoundStayCurrentPortraitElement
 * @extends {AoflElement}
 */
class IconRoundStayCurrentPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStayCurrentPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-stay-current-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStayCurrentPortraitElement.is, IconRoundStayCurrentPortraitElement);

export default IconRoundStayCurrentPortraitElement;
