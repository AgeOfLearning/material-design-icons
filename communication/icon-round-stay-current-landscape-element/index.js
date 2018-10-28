import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStayCurrentLandscapeElement
 * @class IconRoundStayCurrentLandscapeElement
 * @extends {AoflElement}
 */
class IconRoundStayCurrentLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStayCurrentLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-stay-current-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStayCurrentLandscapeElement.is, IconRoundStayCurrentLandscapeElement);

export default IconRoundStayCurrentLandscapeElement;
