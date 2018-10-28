import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWbCloudyElement
 * @class IconRoundWbCloudyElement
 * @extends {AoflElement}
 */
class IconRoundWbCloudyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWbCloudyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wb-cloudy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWbCloudyElement.is, IconRoundWbCloudyElement);

export default IconRoundWbCloudyElement;
