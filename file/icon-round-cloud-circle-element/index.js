import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloudCircleElement
 * @class IconRoundCloudCircleElement
 * @extends {AoflElement}
 */
class IconRoundCloudCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloudCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cloud-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloudCircleElement.is, IconRoundCloudCircleElement);

export default IconRoundCloudCircleElement;
