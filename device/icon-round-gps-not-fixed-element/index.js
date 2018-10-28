import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGpsNotFixedElement
 * @class IconRoundGpsNotFixedElement
 * @extends {AoflElement}
 */
class IconRoundGpsNotFixedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGpsNotFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gps-not-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGpsNotFixedElement.is, IconRoundGpsNotFixedElement);

export default IconRoundGpsNotFixedElement;
