import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloudDoneElement
 * @class IconRoundCloudDoneElement
 * @extends {AoflElement}
 */
class IconRoundCloudDoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloudDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cloud-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloudDoneElement.is, IconRoundCloudDoneElement);

export default IconRoundCloudDoneElement;
