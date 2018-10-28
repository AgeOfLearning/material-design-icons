import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPolymerElement
 * @class IconRoundPolymerElement
 * @extends {AoflElement}
 */
class IconRoundPolymerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPolymerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-polymer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPolymerElement.is, IconRoundPolymerElement);

export default IconRoundPolymerElement;
